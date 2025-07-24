export namespace models {
	
	export class Project {
	    id: number;
	    name: string;
	    identifier: string;
	    description: string;
	
	    static createFrom(source: any = {}) {
	        return new Project(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.identifier = source["identifier"];
	        this.description = source["description"];
	    }
	}

}

