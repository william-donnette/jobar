import {Request} from 'express';
import {Task, TaskQueue} from 'jobar';
import {HelloWorld} from '../workflows';

// Create your task from your workflow
const exampleTask = new Task(HelloWorld, {
	setWorkflowId: (req: Request) => {
		return 'workflow-hello-world-' + req.body.name;
	},
	isExposed: true,
	method: 'post',
	endpoint: 'helloWorld',
});

// Add the task in a queue, add all the task you want on the queue
const exampleTaskQueue = new TaskQueue('example').addTask(exampleTask);

export default exampleTaskQueue;
