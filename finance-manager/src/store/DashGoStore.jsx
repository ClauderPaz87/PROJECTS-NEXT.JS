import { v4 } from "uuid";
import { create } from "zustand";

export const useDashStore = create((set)=>({
    drivers: [],
    editingDriver: null,
    searchDriver: '',

    clients: [],
    editingClient: null,
    searchClient: '',

    taxis: [],
    editingTaxi: null,
    searchTaxi: '',

    trips: [],
    editingTrip: null,

    passengerPay: {},
    passenger: [],
    selectClient:"",

    addTrips: (match,retorno,origin,destiny,place)=>
        set((state)=>({
            trips: [...state.trips,{id:v4(), match,retorno,origin,destiny,place}]
        })),
    deleteTrip: (id)=>
        set((state)=>({
            trips: state.trips.filter((trip)=> trip.id !== id)
        })),
    editTrip: (id,match,retorno,origin,destiny,place)=>
        set((state)=>({
            trips: state.trips.map((trip)=>trip.id === id ? 
            {id:id, macth:match, retorno:retorno, origin:origin, destiny:destiny, place:place} 
            : trip)
        })),
    editUserTrip: (id)=>
        set((state)=>({
            editingTrip: state.trips.find((trip)=> trip.id === id)
        })),
    
    addClient: (name,phone,rg,ssn)=>
        set((state)=>({
            clients: [...state.clients,{id:v4(), name ,phone,rg,ssn}]
        })),
    deleteClient: (id)=>
        set((state)=>({
            clients: state.clients.filter((client)=> client.id !== id)
        })),
    editClient: (id,name,phone,rg,ssn)=>
        set((state)=>({
            clients: state.clients.map((client)=>client.id === id ? 
            {id:id, name:name, phone:phone, rg:rg, ssn:ssn} 
            : client)
        })),
    editUserClient: (id)=>
        set((state)=>({
            editingClient: state.clients.find((client)=> client.id === id)
        })),
    searchUserClient: (name)=>
        set((state)=> ({
            searchClient: name
        })),
    
    addDrivers: (name,phone)=>
        set((state)=>({
            drivers: [...state.drivers,{id:v4(), name ,phone}]
        })),
    deleteDriver: (id)=>
        set((state)=>({
            drivers: state.drivers.filter((driver)=> driver.id !== id)
        })),
    editDriver: (id,name,phone)=>
        set((state)=>({
            drivers: state.drivers.map((driver)=>driver.id === id ? {id:id, name:name, phone:phone} : driver)
        })),
    editUserDriver: (id)=>
        set((state)=>({
            editingDriver: state.drivers.find((driver)=> driver.id === id)
        })),
    searchUserDriver: (name)=>
        set((state)=> ({
            searchDriver: name
        })),

    addTaxis: (name,phone,city)=>
        set((state)=>({
            taxis: [...state.taxis,{id:v4(), name ,phone,city}]
        })),
    deleteTaxi: (id)=>
        set((state)=>({
            taxis: state.taxis.filter((taxi)=> taxi.id !== id)
        })),
    editTaxi: (id,name,phone,city)=>
        set((state)=>({
            taxis: state.taxis.map((taxi)=>taxi.id === id ? {id:id, name:name, phone:phone,city:city} : taxi)
        })),
    editUserTaxi: (id)=>
        set((state)=>({
            editingTaxi: state.taxis.find((taxi)=> taxi.id === id)
        })),
    searchUserTaxi: (name)=>
        set((state)=> ({
            searchTaxi: name
        })),
    addPassengerPay: (value,statePay,methodPay)=>
        set((state)=>({
            passengerPay: {...state.passengerPay,value,statePay,methodPay, }  
        })),
    addPassenger: (client,rg,phone,address,city,number,district,stateDistrict,taxi,status,method,value)=>
        set((state)=>({
            passenger: [...state.passenger,
                {id:v4(),client,rg,phone,address,city,number,district,stateDistrict,taxi,status,method,value}]  
        })),
    select: (value)=>
        set((state)=>({
            selectClient: value
        })),
    deletePassenger: (id)=>
        set((state)=>({
            passenger: state.taxis.filter((pass)=> pass.id !== id)
        })),
}))