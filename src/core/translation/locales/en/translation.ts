import general from './general.json';
import layout from './layout.json';
import verification from './verification.json';
import projects from './projects.json';
export function generateTranslationFile() {
  return Object.assign({}, layout, general, verification, projects);
}
