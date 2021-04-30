//GET ALL usuarios

export interface Usuario {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface RespostaUsuario {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Usuario[];
  support: Support;
}

//Create Usuario

export interface RequestCreate {
  name: string;
  job: string;
}

export interface RespostaCreate {
  name: string;
  job: string;
  id: string;
  createdAt: Date;
}

//Update Usuario

export interface RespostaUpdate {
  name: string;
  job: string;
}

export interface ResponseUpdate {
  name: string;
  job: string;
  updatedAt: Date;
}

//Get Usuario

export interface RespostaUsuarioUnico {
  data: Usuario;
}
