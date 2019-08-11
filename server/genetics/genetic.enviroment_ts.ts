import { Chromosome } from "./genetics.models_ts";

export class GeneticEnviroment {
    constructor(private crossoverProbability: number, private mutationProbability:number, private elitismRate:number) {}

    public Run() : Chromosome {
        

        return new Chromosome();
    }
}