export function changeValue(e) {
if(!e){
  console.log('faiou')
  return
}

  return {
    type: 'CHANGE_VALUE',
    value: e.target.value
  }
}

export function changeValue1(e) {
  return {
    type: 'CHANGE_VALUE1',
    value1: e.target.value
  }
}
export function changeValue1Add(e) {
  return {
    type: 'CHANGE_VALUE1ADD',
    value1: e
  }
}

export function changeValueAdd(e) {
  return {
    type: 'CHANGE_VALUEADD',
    value: e
  }
}

export function callLocation(e) {
  return {
    type: 'CHANGE_LOCATION',
    payload: e
  }
}

