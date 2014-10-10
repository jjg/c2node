#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]){
	
	int i = 0;
	char in_str[10] = "hello";

	// initialize random number generator
	time_t t;
	srand((unsigned) time(&t));

	while(strcmp(in_str, "quit") != 0){

		printf("%d which button (1-%d)?\n", i, rand() % 10);
		fflush(stdout);

		scanf("%s", in_str);
		fflush(stdin);

		i++;

	}

	return 0;

}
