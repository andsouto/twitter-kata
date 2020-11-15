import { BehaviorSubject, Observable, Subject } from "rxjs";

interface cli {
    read(): string;
    write(string): void;
};

interface cli2 {
	input: Observable<string>;
	output: Observable<string>
}

export class Cli {
	input$: Observable<string>;
	// output$: Observable<string>;
	output$ = new Subject<string>();
	// private outputSubject = new Subject<string>();
	private inputSubject = new Subject<string>();

    constructor() {
		// this.output$ = this.outputSubject.asObservable();
		this.input$ = this.inputSubject.asObservable();
		process.stdin.on('data', (data) => {
			this.inputSubject.next(data as any);
		});
		this.output$.subscribe((data) => {
			process.stdout.write(data);
		})
    }

    // write(text: string) {
	// 	this.outputSubject.next(text);
	// 	process.stdout.write(text);
    // }
}

export class Tuister {
    constructor(private cli: Cli) {
		cli.output$.next('>')
		cli.input$.subscribe()
    }

    onCommand(command: string) {

    }
}
