import supabase from './supabase.ts';
import { ISettings } from '../interfaces/settings.ts';
import { Api } from '../utils/enums.ts';

export const getSettings = async (): Promise<ISettings> => {
  const { data, error } = await supabase.from(Api.settings).select('*').single();

  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded');
  }
  return data;
};

// We expect a newSetting object that looks like {setting: newValue}
export const updateSetting = async (newSetting: ISettings) => {
  const { data, error } = await supabase
    .from(Api.settings)
    .update(newSetting)
    // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
    .eq('id', 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Settings could not be updated');
  }
  return data;
};
