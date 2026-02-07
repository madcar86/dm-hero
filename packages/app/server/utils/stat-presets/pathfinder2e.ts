import type { StatPreset } from '~~/types/stat-template'

export const pathfinder2ePreset: StatPreset = {
  system_key: 'pathfinder2e',
  name: 'statPresets.pathfinder2e.name',
  description: 'statPresets.pathfinder2e.description',
  groups: [
    {
      name: 'statPresets.pathfinder2e.groups.attributes',
      group_type: 'attributes',
      fields: [
        { name: 'str', label: 'statPresets.pathfinder2e.str', field_type: 'number', has_modifier: true },
        { name: 'dex', label: 'statPresets.pathfinder2e.dex', field_type: 'number', has_modifier: true },
        { name: 'con', label: 'statPresets.pathfinder2e.con', field_type: 'number', has_modifier: true },
        { name: 'int', label: 'statPresets.pathfinder2e.int', field_type: 'number', has_modifier: true },
        { name: 'wis', label: 'statPresets.pathfinder2e.wis', field_type: 'number', has_modifier: true },
        { name: 'cha', label: 'statPresets.pathfinder2e.cha', field_type: 'number', has_modifier: true },
      ],
    },
    {
      name: 'statPresets.pathfinder2e.groups.resources',
      group_type: 'resources',
      fields: [
        { name: 'hp', label: 'statPresets.pathfinder2e.hp', field_type: 'resource' },
        { name: 'ac', label: 'statPresets.pathfinder2e.ac', field_type: 'number' },
        { name: 'speed', label: 'statPresets.pathfinder2e.speed', field_type: 'number' },
        { name: 'perception', label: 'statPresets.pathfinder2e.perception', field_type: 'number' },
      ],
    },
    {
      name: 'statPresets.pathfinder2e.groups.saves',
      group_type: 'saves',
      fields: [
        { name: 'fortitude', label: 'statPresets.pathfinder2e.fortitude', field_type: 'number' },
        { name: 'reflex', label: 'statPresets.pathfinder2e.reflex', field_type: 'number' },
        { name: 'will', label: 'statPresets.pathfinder2e.will', field_type: 'number' },
      ],
    },
  ],
}
