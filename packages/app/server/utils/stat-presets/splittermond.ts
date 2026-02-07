import type { StatPreset } from '~~/types/stat-template'

export const splittermondPreset: StatPreset = {
  system_key: 'splittermond',
  name: 'statPresets.splittermond.name',
  description: 'statPresets.splittermond.description',
  groups: [
    {
      name: 'statPresets.splittermond.groups.attributes',
      group_type: 'attributes',
      fields: [
        { name: 'aus', label: 'statPresets.splittermond.aus', field_type: 'number' },
        { name: 'bew', label: 'statPresets.splittermond.bew', field_type: 'number' },
        { name: 'int', label: 'statPresets.splittermond.int', field_type: 'number' },
        { name: 'kon', label: 'statPresets.splittermond.kon', field_type: 'number' },
        { name: 'mys', label: 'statPresets.splittermond.mys', field_type: 'number' },
        { name: 'sta', label: 'statPresets.splittermond.sta', field_type: 'number' },
        { name: 'ver', label: 'statPresets.splittermond.ver', field_type: 'number' },
        { name: 'wil', label: 'statPresets.splittermond.wil', field_type: 'number' },
      ],
    },
    {
      name: 'statPresets.splittermond.groups.resources',
      group_type: 'resources',
      fields: [
        { name: 'lp', label: 'statPresets.splittermond.lp', field_type: 'resource' },
        { name: 'fo', label: 'statPresets.splittermond.fo', field_type: 'resource' },
      ],
    },
    {
      name: 'statPresets.splittermond.groups.combat',
      group_type: 'combat',
      fields: [
        { name: 'gk', label: 'statPresets.splittermond.gk', field_type: 'number' },
        { name: 'gsw', label: 'statPresets.splittermond.gsw', field_type: 'number' },
        { name: 'ini', label: 'statPresets.splittermond.ini', field_type: 'number' },
        { name: 'vtd', label: 'statPresets.splittermond.vtd', field_type: 'number' },
        { name: 'kw', label: 'statPresets.splittermond.kw', field_type: 'number' },
        { name: 'gw', label: 'statPresets.splittermond.gw', field_type: 'number' },
      ],
    },
  ],
}
