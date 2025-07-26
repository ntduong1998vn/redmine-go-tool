export namespace models {
	
	export class MembershipRole {
	    id: number;
	    name: string;
	    inherited?: boolean;
	
	    static createFrom(source: any = {}) {
	        return new MembershipRole(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.inherited = source["inherited"];
	    }
	}
	export class MembershipGroup {
	    id: number;
	    name: string;
	
	    static createFrom(source: any = {}) {
	        return new MembershipGroup(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	    }
	}
	export class MembershipUser {
	    id: number;
	    name: string;
	
	    static createFrom(source: any = {}) {
	        return new MembershipUser(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	    }
	}
	export class MembershipProject {
	    id: number;
	    name: string;
	
	    static createFrom(source: any = {}) {
	        return new MembershipProject(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	    }
	}
	export class Membership {
	    id: number;
	    project: MembershipProject;
	    user?: MembershipUser;
	    group?: MembershipGroup;
	    roles: MembershipRole[];
	
	    static createFrom(source: any = {}) {
	        return new Membership(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.project = this.convertValues(source["project"], MembershipProject);
	        this.user = this.convertValues(source["user"], MembershipUser);
	        this.group = this.convertValues(source["group"], MembershipGroup);
	        this.roles = this.convertValues(source["roles"], MembershipRole);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
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

