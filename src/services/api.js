// No emulador Android, 10.0.2.2 aponta para o localhost da maquina host.
const BASE_URL = "http://10.0.2.2:3000";

export async function buscarLivros() {
  const response = await fetch (`${BASE_URL}/livros`)
  if(!response.ok){
    throw new Error(`Erro ${response.status}: falha ao buscar livros`)
  }
}

export async function buscarLivroPorId(id) {
  // TODO: implementar
}

export async function adicionarFavorito(livroId, observacao) {
  // TODO: implementar
}

export async function listarFavoritos() {
  // TODO: implementar
}

export async function editarFavorito(id, observacao) {
  // TODO: implementar
}

export async function removerFavorito(id) {
  // TODO: implementar
}
