// src/filters/http-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ValidationError } from 'class-validator';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const exceptionResponse = exception.getResponse();
    const errorResponse =
      typeof exceptionResponse === 'object' && exceptionResponse !== null
        ? exceptionResponse
        : { message: exceptionResponse };

    if (
      status === HttpStatus.BAD_REQUEST &&
      Array.isArray(errorResponse['message'])
    ) {
      const validationErrors = errorResponse['message'] as ValidationError[];
      const formattedErrors = this.formatValidationErrors(validationErrors);
      response.status(status).json({
        message: 'Validation failed',
        errors: formattedErrors,
      });
    } else {
      response.status(status).json({
        message: exception.message,
        ...errorResponse,
      });
    }
  }

  private formatValidationErrors(errors: ValidationError[]): any {
    return errors.reduce((acc, err) => {
      acc[err.property] = Object.values(err.constraints || {});
      return acc;
    }, {});
  }
}
