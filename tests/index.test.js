import chai from 'chai';
import { Dog, Cat, Animal, Shark } from "../src/index.js";

import {expect} from 'chai';

 describe("Cat",() =>{
        it("Should be a subclass of Animal",() => {
            expect(new Cat()).to.instanceOf(Animal);
        }); 
});
   describe("Dog", () => {
     it("Should be a subclass of Animal", () => {
       expect(new Dog("Jack", 5, 'Boss', 4, 'dogs')).to.instanceOf(
         Animal
       );
     });
   });

   describe("Shark ", () => {
     it("Should be a subclass of Animal", () => {
       expect(new Shark("Nemo", 15,0, 'Shark')).to.instanceOf(
         Animal
       );
     });
   });