import supabase, { supabaseUrl } from './supabase.ts';
import { ICabin } from '../interfaces/cabin.ts';
import { Api } from '../utils/enums.ts';

export const getCabins = async (): Promise<ICabin[]> => {
  const { data, error } = await supabase.from(Api.cabins).select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
};

export const mutateCabin = async (newCabin: Partial<ICabin>, id?: number) => {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${(newCabin?.image as unknown as File)?.name}`.replaceAll('/', '');
  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/edit cabin
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let query: any = supabase.from(Api.cabins);

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created');
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage.from('cabin-images').upload(imageName, newCabin.image!);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from(Api.cabins).delete().eq('id', data.id);
    console.error(storageError);
    throw new Error('Cabin image could not be uploaded and the cabin was not created');
  }

  return data;
};

export const deleteCabin = async (id: number) => {
  const { data, error } = await supabase.from(Api.cabins).delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be deleted');
  }

  return data;
};
