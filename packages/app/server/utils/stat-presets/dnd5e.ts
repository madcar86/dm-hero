import type { StatPreset } from '~~/types/stat-template'

export const dnd5ePreset: StatPreset = {
  system_key: 'dnd5e',
  name: 'statPresets.dnd5e.name',
  description: 'statPresets.dnd5e.description',
  groups: [
    {
      name: 'statPresets.dnd5e.groups.attributes',
      group_type: 'attributes',
      fields: [
        { name: 'str', label: 'statPresets.dnd5e.str', field_type: 'number', has_modifier: true },
        { name: 'dex', label: 'statPresets.dnd5e.dex', field_type: 'number', has_modifier: true },
        { name: 'con', label: 'statPresets.dnd5e.con', field_type: 'number', has_modifier: true },
        { name: 'int', label: 'statPresets.dnd5e.int', field_type: 'number', has_modifier: true },
        { name: 'wis', label: 'statPresets.dnd5e.wis', field_type: 'number', has_modifier: true },
        { name: 'cha', label: 'statPresets.dnd5e.cha', field_type: 'number', has_modifier: true },
      ],
    },
    {
      name: 'statPresets.dnd5e.groups.resources',
      group_type: 'resources',
      fields: [
        { name: 'hp', label: 'statPresets.dnd5e.hp', field_type: 'resource' },
        { name: 'ac', label: 'statPresets.dnd5e.ac', field_type: 'number' },
        { name: 'speed', label: 'statPresets.dnd5e.speed', field_type: 'number' },
        { name: 'initiative', label: 'statPresets.dnd5e.initiative', field_type: 'number' },
      ],
    },
    {
      name: 'statPresets.dnd5e.groups.savingThrows',
      group_type: 'saves',
      fields: [
        { name: 'save_str', label: 'statPresets.dnd5e.saveStr', field_type: 'number' },
        { name: 'save_dex', label: 'statPresets.dnd5e.saveDex', field_type: 'number' },
        { name: 'save_con', label: 'statPresets.dnd5e.saveCon', field_type: 'number' },
        { name: 'save_int', label: 'statPresets.dnd5e.saveInt', field_type: 'number' },
        { name: 'save_wis', label: 'statPresets.dnd5e.saveWis', field_type: 'number' },
        { name: 'save_cha', label: 'statPresets.dnd5e.saveCha', field_type: 'number' },
      ],
    },
    {
      name: 'statPresets.dnd5e.groups.skills',
      group_type: 'skills',
      fields: [
        { name: 'acrobatics', label: 'statPresets.dnd5e.acrobatics', field_type: 'number' },
        { name: 'animal_handling', label: 'statPresets.dnd5e.animalHandling', field_type: 'number' },
        { name: 'arcana', label: 'statPresets.dnd5e.arcana', field_type: 'number' },
        { name: 'athletics', label: 'statPresets.dnd5e.athletics', field_type: 'number' },
        { name: 'deception', label: 'statPresets.dnd5e.deception', field_type: 'number' },
        { name: 'history', label: 'statPresets.dnd5e.history', field_type: 'number' },
        { name: 'insight', label: 'statPresets.dnd5e.insight', field_type: 'number' },
        { name: 'intimidation', label: 'statPresets.dnd5e.intimidation', field_type: 'number' },
        { name: 'investigation', label: 'statPresets.dnd5e.investigation', field_type: 'number' },
        { name: 'medicine', label: 'statPresets.dnd5e.medicine', field_type: 'number' },
        { name: 'nature', label: 'statPresets.dnd5e.nature', field_type: 'number' },
        { name: 'perception', label: 'statPresets.dnd5e.perception', field_type: 'number' },
        { name: 'performance', label: 'statPresets.dnd5e.performance', field_type: 'number' },
        { name: 'persuasion', label: 'statPresets.dnd5e.persuasion', field_type: 'number' },
        { name: 'religion', label: 'statPresets.dnd5e.religion', field_type: 'number' },
        { name: 'sleight_of_hand', label: 'statPresets.dnd5e.sleightOfHand', field_type: 'number' },
        { name: 'stealth', label: 'statPresets.dnd5e.stealth', field_type: 'number' },
        { name: 'survival', label: 'statPresets.dnd5e.survival', field_type: 'number' },
      ],
    },
  ],
}
