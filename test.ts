const obj = {
  a: 1,
  b: 2
}
const depsMap = new Map()

const aDeps = new Set()
depsMap.set('a', aDeps)

const bDeps = new Set()
depsMap.set('b', bDeps)

const reactiveMap = new WeakMap()

reactiveMap.set(obj, depsMap)
