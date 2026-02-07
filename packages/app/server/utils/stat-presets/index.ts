import type { StatPreset } from '~~/types/stat-template'
import { dnd5ePreset } from './dnd5e'
import { pathfinder2ePreset } from './pathfinder2e'
import { dsa5Preset } from './dsa5'
import { splittermondPreset } from './splittermond'
import { blankPreset } from './blank'

export const STAT_PRESETS: StatPreset[] = [
  dnd5ePreset,
  pathfinder2ePreset,
  dsa5Preset,
  splittermondPreset,
  blankPreset,
]

export function getPresetByKey(key: string): StatPreset | undefined {
  return STAT_PRESETS.find(p => p.system_key === key)
}
