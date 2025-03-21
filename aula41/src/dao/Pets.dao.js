import petModel from "./models/Pet.js";

export default class Pet {

    get = (params) =>{
        return petModel.find(params)
    }

    getBy = (params) =>{
        return petModel.findOne(params);
    }

    save = (doc) =>{
        return petModel.create(doc);
    }

    update = (id,doc) =>{
        return petModel.findByIdAndUpdate(id,{$set:doc}, {new:true}) // o new:true é para retornar o objeto atualizado
    }

    delete = (id) =>{
        return petModel.findByIdAndDelete(id);
    }
}