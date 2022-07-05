import {v4 as uuidv4} from "uuid"
let users=[
    {
        name:"Getabalew",
        age:28,
        id:uuidv4(),
    },
    {
        name:"Jhon",
        age:29,
        id:uuidv4(),
    }
]

export const getAllUsers= function(req,res){
    res.json(users)
}
export const createUser= (req,res)=>{
    let {name, age} = req.body;
    users.push({
        name,age,
        id:uuidv4()
    })
    res.json(users)
}
export const getSingleUser= function(req, res){
    let id= req.params.id;

    res.json(users.filter(user=>user.id==id))
}
export const deleteUser = function(req,res){
    let id=req.params.id
//
    let user= users.filter(user=>user.id!=id)
    res.json(user)
}
export const editUser=  (req, res)=>{
    let userId = req.params.id
    let {name, age}= req.body

    users= users.map(user=>{
        if(user.id===userId)
        return{
            name, 
            age,
            id:userId
        }
        return user
    })
    res.json(users)
}