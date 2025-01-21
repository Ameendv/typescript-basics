let names: string = 'hey'//explicit typing
let random = 'hello'//implicit typing    

var arr = [1,2,3,5,'a']

const tuple:[number, number, string] = [1,2,'string']

console.log(tuple[2])

const test : [number,string][] = [[1,'2'],[1,"4"]]

test[0][0]

//literals and enums
let data = 'north'

let direction: 'north' | 'data' | 'east' | 1 //this is literals

direction = 'north'  

//enums
enum Size{
    Small = 10, 
    Medium = 0, 
    Large,
    Big
}


let size = Size.Small

console.log(size)
enum Direction{
    North  ,
    South=0,
    East,
    West='west'

}

var dir:Direction = Direction.East

console.log(dir, )

//any, unknown, typecase
let anytype: any = 's'//there wont be any type checking


console.log(anytype+1)

let unkknown: unknown = [[10]]//assert/check the type before perfoming any operation on it


// if(typeof unkknown === 'string'){
//     console.log(unkknown.length)
// }else{
//     console.log('its snumb')
// }

 console.log((unkknown as string).length, 'length')//type casting
 console.log(unkknown as number+1, 'a')//type casting

 console.log((unkknown as string[][])[0][0])//type casting

 //optional chaining and bang

 const names1 =  [{name: 'ameen'}, {name: 'ans'}, {name1: 'amiz'}]

 const tx = names1.pop()!.name?.length
 console.log(tx)


 //function types

 function sum(x: number,y: number): number{

    return x+y
 }

 //type of function's args
function naming(firstName: string, lastName: string, middleName: string = 'defaulr'): string {
    return firstName + middleName + lastName
}

//type of function
function callFunction(
    func: (f: string, l: string, m?: string) => string,
    fname: string,
    lname: string,
    mname?: string) {

    console.log(func(fname, lname, mname))
}

callFunction(naming , 'ameen', 'dv','haha')



//another example for multiple funcs as args
function mul(x:number, y: number): number{
    return x*y
}

function div(x: number, y: number): number{
    return x/y
}

function applyFunc(
    funcs: ((a: number, b: number) => number)[], 
    values: number[][] ) : number[]{
        const result = [] as number[]

        for(let i=0;i<funcs.length;i++){
            result.push(funcs[i](values[i][0], values[i][1]))
        }

        return result
}

console.log(applyFunc([mul, div], [[1,2],[3,4]]))
