import { Subject } from 'rxjs';
import {Tuister} from '../src/Tuister';

test('Alice can post a new message', async () => {
	const cli = {
		input$: new Subject<string>(),
		output$: new Subject<string>(),
	}
  // const cli = {
  //   _text: "",
	// 	read: jest.fn(), //.mockReturnValue(cli._text),
	// 	write: jest.fn() //.mockImplementation(input => cli._text = input),
  // };
	// cli.read.mockImplementationOnce(() => 'Alice hi!');
	// cli.read.mockImplementationOnce(() => 'Alice hi 2!');

	const app = new Tuister(cli);
  expect(cli.write).toHaveBeenLastCalledWith('>');

  cli.write('Alice hi!');

	// await task;
	// const data = cli.stdout.read();
	// expect(data).toBe('>');
	// mockStdin.send("Alice hi!", "ascii");
	// expect(stdout.read()).toBe('>')
	// // asks for tuits
	// mockStdin.send("Alice", "ascii");
	// expect(stdout.read()).toBe(">hi! (x minutes ago)");

	// mockStdin.restore();
})
