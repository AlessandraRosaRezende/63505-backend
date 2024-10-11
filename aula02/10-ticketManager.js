class TicketManager {
  #events; // private => não acessível fora da classe
  #basePrice = 10;
  #id = 0;
  constructor() {
    this.#events = [];
  }
  getEvents = () => this.#events;

  addEvent = (nome, lugar, preco, capacidade, data) => {
    this.#id = this.#id + 1;

    const event = {
      id: this.#id,
      nome,
      lugar,
      preco: this.#basePrice + preco,
      capacidade,
      data: data ?? `${new Date().getDate()}/${new Date().getMonth() + 1}`, // para pegar o formato de data DD/MM
      participants: [],
    };
    this.#events.push(event);
  };

  addUser = (idEvent, idUser) => {
    const index = this.#events.findIndex((event) => {
      return event.id === idEvent;
    });

    if (this.#events[index] === undefined) {
      console.log("Evento nao encontrado");
      return false;
    }
    const particiantExists = this.#events[index].participants.includes(idUser);
    if (!particiantExists) {
      this.#events[index].participants.push(idUser);
    }
    console.log(this.#events[index].participants);
  };

  putEventoEnGira = (idEvent, novaCidade, novaData) => {
    this.#id = this.#id + 1;

    const index = this.#events.findIndex((event) => {
      return event.id === idEvent;
    });

    if (this.#events[index] === undefined) {
      console.log("Evento nao encontrado");
      return false;
    }

    const newEvent = {
      ...this.#events[index],
      id: this.#id,
      lugar: novaCidade,
      data: novaData ?? `${new Date().getDate()}/${new Date().getMonth() + 1}`,
      participants: [],
    };

    this.#events.push(newEvent);
  };
}

const manager = new TicketManager();

manager.addEvent("Rock in Rio", "Lisboa", 10, 50, "10/10");  // id = 1 index: 0
manager.addEvent("Festa2", "SC", 10, 50);  // id = 2 index = 1
console.log("Antes", manager.getEvents());
manager.addUser(1, 5);
manager.addUser(1, 4);
manager.addUser(1, 4);
manager.addUser(2, 4);
manager.putEventoEnGira(1, "RJ", "10/12")
console.log("Depois", manager.getEvents());
