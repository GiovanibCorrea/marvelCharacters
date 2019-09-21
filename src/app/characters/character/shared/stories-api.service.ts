import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5'

@Injectable({
  providedIn: 'root'
})
export class StoriesApiService {

  publicKey = '0a1124d3dd4ef01157d65d180cd03da9';
  privateKey = "11bb5602daa10980b1eca0f5f2ce398ec45886ea";
  timeStamp = Date.now().toString();
  
  Hash = this.createHash(this.timeStamp);
  
  urlComicsBefore = `https://gateway.marvel.com:443/v1/public/characters/`;
  urlComicsAfter = `/stories?&limit=5&ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.Hash}&orderBy=id`;


  constructor(private http: HttpClient) { }
  
  getComics(id): Observable<any>{
    var urlApi = this.urlComicsBefore + id + this.urlComicsAfter;

    return this.http.get<any>(urlApi)
    .pipe(map((data: any) => data.data.results))
  }
  
  //Criptografia MD5
  createHash(timeStamp) {
    const toBeHashed = timeStamp + this.privateKey + this.publicKey;
    const hashedMessage = Md5.hashStr(toBeHashed);
    return hashedMessage;
  }
}
