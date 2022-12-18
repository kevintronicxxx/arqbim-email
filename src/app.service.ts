import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Email } from 'entities/email.entity';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) { }

  async example2(email:Email) {
    await
    this
      .mailerService
      .sendMail({
        to: 'kevintronicfz16@gmail.com, contacto@arqbim.cl, group@arqbim.cl', //Lista de direcciones de correo electrónico de los destinatarios
        from: 'group@arqbim.cl', //Dirección de correo electrónico de los remitentes
        subject: 'Nuevo cliente ArqBim ✔',
        template: 'index', // The `.pug` or `.hbs` extension is appended automatically.
        context: {  // Data to be sent to template engine.
          nombre: email.nombre,
          telefono: email.telefono,
          correo: email.correo,
          mensaje: email.mensaje
        },
      })
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {   
        console.log(err)
      });

return {ok:true, msg:'Mensaje enviado'}

  }



}
