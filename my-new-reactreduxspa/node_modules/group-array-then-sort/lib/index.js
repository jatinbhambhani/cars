export default (array, groupByKey, sortByKey, order = 'asc') => {
  order = order.toLowerCase()
  return new Promise((resolve, reject) => {
    try {
      let returnObject = {}
      array.forEach((value) => {
        // No key present in value, skip this iteration
        if (!value[groupByKey]) return

        // Ensure the key is present in the returnObject
        if (!returnObject[value[groupByKey]]) {
          returnObject[value[groupByKey]] = []
        }

        // Push the value into the array
        returnObject[value[groupByKey]].push(value)
      })
      let objKeys = Object.keys(returnObject)
      let i = 0
      for (let key in returnObject) {
        returnObject[key].sort((a, b) => {
          switch(order){
            case 'desc': {
              if (typeof a[sortByKey] === 'string') {
                return a[sortByKey] < b[sortByKey]
              } else {
                return a[sortByKey] > b[sortByKey]
              }
            } break;
            default:{
              if (typeof a[sortByKey] === 'string') {
                return a[sortByKey] > b[sortByKey]
              } else {
                return a[sortByKey] < b[sortByKey]
              }
            }
          }
        })
        ++i
        if (i === objKeys.length) {
          return resolve(returnObject)
        }
      }
    } catch (e) {
      console.log(e)
      reject(e)
    }
  })
}