import { Component, OnInit } from '@angular/core';

import { ProcessorOfThingsService } from './services/processor-of-things.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';
	constructor(private processorOfThingsService: ProcessorOfThingsService) { }

	ngOnInit() {
		//everything that subscribes to this will get emissions when the state is changed
		this.processorOfThingsService.runningStatus$.subscribe((isRunning) => console.log('processor is running', isRunning));
		//everything that subscribes to this will get emissions when an item is done
		this.processorOfThingsService.queueStatus$.subscribe((item) => console.log('Finished processing', item));

		//load up the queue
		this.processorOfThingsService.addToQueue("Item 1");
		this.processorOfThingsService.addToQueue("Item 2");
		this.processorOfThingsService.addToQueue("Item 3");
		this.processorOfThingsService.addToQueue("Item 4");
		this.processorOfThingsService.addToQueue("Item 5");
		this.processorOfThingsService.addToQueue("Item 6");
		this.processorOfThingsService.addToQueue("Item 7");
		this.processorOfThingsService.addToQueue("Item 8");
	}
}
