import chalk from "chalk";

export function INFO(string: String) {
  console.log(chalk.blue("[INFO]: ") + string);
}

export function SUCCESS(string: String) {
  console.log(chalk.green("[INFO]: ") + string);
}

export function WARNING(string: String) {
  console.log(chalk.yellow("[WARNING]: ") + string);
}

export function ERROR(string: any) {
  console.log(chalk.red("[ERROR]: ") + string);
}
