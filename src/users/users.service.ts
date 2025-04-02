import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    private users : any = [
        {
            id: 1,
            name: 'John Doe',
            phone: '1234567890'
        },
        {
            id: 2,
            name: 'Jane Doe',
            phone: '0987654321'
        }
    ]

    getUsers(){
        return this.users;
    }

    createUsers(user: CreateUsersDto){
        this.users.push(user);
        return {
            ...user,
            id: this.users.length +1
        }
    }

}
