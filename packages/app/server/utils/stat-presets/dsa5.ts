import type { StatPreset } from '~~/types/stat-template'

export const dsa5Preset: StatPreset = {
  system_key: 'dsa5',
  name: 'statPresets.dsa5.name',
  description: 'statPresets.dsa5.description',
  groups: [
    {
      name: 'statPresets.dsa5.groups.attributes',
      group_type: 'attributes',
      fields: [
        { name: 'mu', label: 'statPresets.dsa5.mu', field_type: 'number' },
        { name: 'kl', label: 'statPresets.dsa5.kl', field_type: 'number' },
        { name: 'in', label: 'statPresets.dsa5.in', field_type: 'number' },
        { name: 'ch', label: 'statPresets.dsa5.ch', field_type: 'number' },
        { name: 'ff', label: 'statPresets.dsa5.ff', field_type: 'number' },
        { name: 'ge', label: 'statPresets.dsa5.ge', field_type: 'number' },
        { name: 'ko', label: 'statPresets.dsa5.ko', field_type: 'number' },
        { name: 'kk', label: 'statPresets.dsa5.kk', field_type: 'number' },
      ],
    },
    {
      name: 'statPresets.dsa5.groups.resources',
      group_type: 'resources',
      fields: [
        { name: 'lep', label: 'statPresets.dsa5.lep', field_type: 'resource' },
        { name: 'asp', label: 'statPresets.dsa5.asp', field_type: 'resource' },
        { name: 'kap', label: 'statPresets.dsa5.kap', field_type: 'resource' },
      ],
    },
    {
      name: 'statPresets.dsa5.groups.combat',
      group_type: 'combat',
      fields: [
        { name: 'at', label: 'statPresets.dsa5.at', field_type: 'number' },
        { name: 'pa', label: 'statPresets.dsa5.pa', field_type: 'number' },
        { name: 'fk', label: 'statPresets.dsa5.fk', field_type: 'number' },
        { name: 'ini', label: 'statPresets.dsa5.ini', field_type: 'number' },
        { name: 'aw', label: 'statPresets.dsa5.aw', field_type: 'number' },
        { name: 'gs', label: 'statPresets.dsa5.gs', field_type: 'number' },
      ],
    },
  ],
}
