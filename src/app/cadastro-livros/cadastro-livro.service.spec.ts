import { TestBed } from '@angular/core/testing';

import { CadastroLivroService } from './cadastro-livro.service';

describe('CadastroLivroService', () => {
  let service: CadastroLivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroLivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
