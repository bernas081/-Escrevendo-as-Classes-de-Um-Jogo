class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
    const ataquesPorTipo = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken"
    }

    const ataque = ataquesPorTipo[this.tipo]

    console.log(`o ${this.tipo} atacou usando ${ataque}`)
  }
}

// ===== Exemplo de execução =====
const herois = [
  new Heroi("Merlin", 150, "mago"),
  new Heroi("Arthas", 35, "guerreiro"),
  new Heroi("Lee", 28, "monge"),
  new Heroi("Hanzo", 32, "ninja")
]

herois.forEach(heroi => heroi.atacar())
