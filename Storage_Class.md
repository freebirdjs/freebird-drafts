Storage Class
===============

Storage class for freebird

<br />

## Table of Contents  

* [Constructor](#Constructor)  
* [Properties](#Properties)  
* [Methods](#Methods) 
* [Private Constructor](#Private)

<br />

<a name="Constructor"></a>
## Constructor  

Storage(file, maxNum)

**Arguments:**  

1. `file` (_String_): The path to the file where the data is persisted.
2. `maxNum` (_Number_): The maximum number that can be stored in this class.

**Returns:**  

* (_Object_) objectBox (instance of Storage class)

<br />

<a name="Properties"></a>
## Properties  

**Examples**

```js
{
    // private
    _maxNum: Number
    _count: Number
    _box: Object         //created by Dict class
    _db: Object          //persistent datastore

    //public
    file: String
}
```

**Notice**: id start from 1

<br />

<a name="Methods"></a>
## Methods  

* isEmpty()
    - whether the box is empty
* has(id) (?)
    - is objectBox has the object of specify id
    - id (_Number_): object id
* get(id) 
    - get the object of specify id
    - id (_Number_): object id
* set(id, obj)
    - store object to the box and specify the object id, store obj to db
    - id (_Number_): object id
    - obj (_Object_): object to be stored
* add(obj)
    - store object to the box, store obj to db
    - obj (_Object_): object to be stored
* remove(id)
    - remove the object of specify id, remove obj from db
    - id (_Number_): object id
* getMaxNum() (?)
    - get the maximum number of box
* getCount() (?)
    - get the number of objects stored in the box
* filter(path, value)
    - iterates box and filter out the match object
    - path (_String_): path to the object value 
    - value (_Depends_): the value you want to compare to each object in object box
* exportAllIds()
    - export all object id
* find(queryJson, orderJson, rangeJson, fieldsJson, callback)
    - looking for multiple objects matching you query from database
    - queryJson (_Object_):
    - orderJson (_Object_):
    - rangeJson (_Object_):
    - fieldsJson (_Object_):
* modify(id, path, snippet, callback)
    - modify the value of given object path to database
    - id (_Number_): device id
    - path (_String_): path to the value which you want to modify
    - snippet (_Depends_): the value of the object refer by path will be modified to snippet
* replace(id, path, value, callback)
    - replace the value of given object path to database
    - id (_Number_): device id
    - path (_String_): path to the value which you want to replace
    - value (_Depends_): the value of the object refer by path will be replaced to this value
* load()
    - load each object from database to box

<br />

<a name="Private"></a>
## Private Constructor 

Dict()

#### Property
* elements (_Object_)

#### Method
* has(key)
    - check element of given has in dictionary or not
* get(key)
    - get element by given key
* set(key, val)
    - add element to dictionary by given key
* remove(key)
    - remove element by given key

