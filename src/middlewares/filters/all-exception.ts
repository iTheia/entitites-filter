import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import axios from 'axios';

//handle general exceptions
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    // handle axios errors
    if (axios.isAxiosError(exception)) {
      return res.status(exception.response.status).json({
        statusCode: exception.response.status,
        ...exception.response.data,
      });
    }

    // set status
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // if the error comes from an http exception keep the formated error
    const body: any =
      exception instanceof HttpException
        ? exception.getResponse()
        : { message: exception.toString() };

    // if the error have an array error message, send it to details and give a generic error mesage
    if (typeof body.message === 'object') {
      body.details = body.message;
      body.message = 'Error procesing the request';
    }

    return res.status(status).json(body);
  }
}
