# group-array-then-sort

```
npm i --save group-array-then-sort
```

## What is it

Group and array of objects by a given key, then sort the groups of array by another key either asc or desc.


## Example use:
Take this array of objects:
```
[{
  name: 'John',
  subject: 'English',
  score: 76,
  teacher: 'Mr Bob'
}, {
  name: 'John',
  subject: 'Science',
  score: 77,
  teacher: 'Mr Jim'
}, {
  name: 'John',
  subject: 'Maths',
  score: 56,
  teacher: 'Mr Ben'
}, {
  name: 'Janine',
  subject: 'Science',
  score: 62,
  teacher: 'Mr Jim'
}, {
  name: 'Janine',
  subject: 'Maths',
  score: 41,
  teacher: 'Mr Ben'
}]
```
You can then easily group the above by names into the following:
```
{ John: 
   [ { name: 'John', subject: 'Science', score: 77, teacher: 'Mr Jim' },
     { name: 'John', subject: 'Maths', score: 56, teacher: 'Mr Ben' },
     { name: 'John', subject: 'English', score: 76, teacher: 'Mr Bob' } 
   ],
  Janine: 
   [ { name: 'Janine', subject: 'Science', score: 62, teacher: 'Mr Jim' },
     { name: 'Janine', subject: 'Maths', score: 41, teacher: 'Mr Ben' } 
   ] 
 }

```

Using promises
```
const groupArrayThenSort = require('group-array-then-sort')
groupArrayThenSort(obj, 'name', 'subject', 'desc').then((sortedObj) => {
    console.log(sortedObj)
}).catch((e) => {
    console.error(e)
})
```

Using await
```
import groupArrayThenSort from 'group-array-then-sort'

// inside some async functino
let sortedObj
try{
   sortedObj = groupArrayThenSort(obj, 'name', 'subject', 'desc')
} catch (e) {
    console.error(e)
}    
```

See the tests in this repo for examples.




