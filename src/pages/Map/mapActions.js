export function  makeState(viewport) {
  return {
    type: 'SET_VIEWPORT',
    viewport: viewport.viewport
  }
}