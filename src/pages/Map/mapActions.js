export function  makeState(viewport) {
  console.log('viewport MAPACTIONS --->>>>>');
  console.log(viewport.viewport);
  // console.log(viewport.viewport.longitude);
  
  return {
    type: 'SET_VIEWPORT',
    viewport: viewport.viewport
  }
}