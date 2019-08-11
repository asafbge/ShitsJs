import { Profile, Tag } from "../models_ts";

export class Chromosome {
    public genes: Array<Gene> = [];
}

export class Gene {
    public profile:Profile;
    public tag: Tag;
    public RoomId: number;
    public fittness: number;
}