import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform { //validar los datos convertirlos y retornarlos
  transform(value: any, metadata: ArgumentMetadata) { 
    console.log('value' , value); // recibe el objeto que se envia a greet

    const ageNumber = parseInt(value.age.toString,10);
    if(isNaN(ageNumber)){
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST)
    }
    return {...value, age:ageNumber};
  }
}
