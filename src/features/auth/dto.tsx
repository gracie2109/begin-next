import type {CommonEntity} from "@/models/common"
import {ResponseEntity} from "@/models/common";

interface IAuthLogin {
    email: string,
    password: string
}

interface IAuthRegister extends  IAuthLogin {
    name: string,
}

interface IUserAddress {
    province:{
        children: string,
        key: string,
        value:string
    },
    district:{
        children: string,
        key: string,
        value:string
    },
    ward:{
        children: string,
        key: string,
        value:string
    },
    desc:string
}

interface IUserAvatar {

}

interface IAuthLoginResponse extends IAuthRegister, CommonEntity,ResponseEntity{
    fullname?: string,
    googleId?: string,
    avatar?: any,
    phone?: string,
    address?: IUserAddress | undefined,
    gender?: number,
    role?:number,
    salt?:string,
    status:number,
    dob:Date,

}
