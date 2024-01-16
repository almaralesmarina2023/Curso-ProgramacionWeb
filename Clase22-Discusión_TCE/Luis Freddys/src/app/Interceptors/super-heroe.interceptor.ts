import { HttpClient, HttpInterceptorFn } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import{ inject } from '@angular/core'
import { finalize } from 'rxjs';
import { Console } from 'console';

export const superHeroeInterceptor: HttpInterceptorFn = (req, next) => {
  //injecto el servicio del componente ngxuiloader
  let _ngxUiLoaderService= inject(NgxUiLoaderService); 
  
  //variable para contar todas las peticiones http que esten activas
  let _activeRequest = 0;
 
  //con la primera peticion http iniciamos el loader
		if (_activeRequest === 0) {
			_ngxUiLoaderService.start();
		}
		_activeRequest++; //1
  
   //finalizamos el loader despues que hallan terminado todas las peticiones http
  return next(req).pipe(finalize(()=>{
    _activeRequest--;
    if(_activeRequest===0)
    _ngxUiLoaderService.stop();
  }));
 

};



