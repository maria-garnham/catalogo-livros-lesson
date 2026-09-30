const BASE_URL = "http://10.0.2.2:3000";

export async function buscarLivros() {
  try {
    const response = await fetch(`${BASE_URL}/livros`);
    if (!response.ok) {
      throw new Error(`Erro ${response.status}: Falha ao buscar Livros`);
    }
    return response.json();
  } catch (e) {
    console.error("buscarLivros", e.message);
    throw e;
  }
}

export async function buscarLivroPorId(id) {
  try {
    const response = await fetch(`${BASE_URL}/livros/${id}`);
    if (!response.ok) {
      throw new Error(`Erro ${response.status}: Falha ao Encontrar livro`);
    }
    return response.json();
  } catch (e) {
    console.error("buscarLivroPorId", e.message);
    throw e;
  }
}

export async function adicionarFavorito(lviroId, observacao = "") {
  try {
    const response = await fetch(`${BASE_URL}/favoritos/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lviroId, observacao),
    });
    if (!response.ok) {
      const corpo = await response.json().catch(() => ({}));
      const error = new Error(
        corpo.erro ?? `Erro ${response.status}: Falha ao adicionar favoritos`,
      );
      error.status = response.status;
    }
    return response.json();
  } catch (e) {
    console.error("adicionarFavorito", e.message);
    throw e;
  }
}

export async function listarFavoritos() {
  try {
    const response = await fetch(`${BASE_URL}/favoritos`);
    if (!response.ok) {
      throw new Error(`Erro ${response.status}: Falha ao buscar Favoritos`);
    }
    return response.json();
  } catch (e) {
    console.error("listarFavoritos", e.message);
    throw e;
  }
}

export async function editarFavorito(id, observacao) {
  try{
    const response = await fetch(`${BASE_URL}/favoritos/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({observacao}),

    })

    if(!response.ok){
      throw new Error(`Erro ${response.status}: falha ao editar favorito`)
    }

    return response

  } catch (e) {
    console.error("editarFavorito:", e.message);
    throw e;
  }
}

export async function removerFavorito(id) {
  try{
    const response = await fetch(`${BASE_URL}/favoritos/${id}`, {
      method: "DELETE",
    })
    if(!response.ok){
      throw new Error(`Erro ${response.status}: falha ao remover favorito`)
    }

  }catch (e) {
    console.error("removerFavorito:", e.message);
    throw e;
  }
}
