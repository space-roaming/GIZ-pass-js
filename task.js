let numbers  = [5,8,0,1,9,11,15,16]
    console.log("orginal numbers" , numbers)
    for ( let i = 0 ; i < numbers.length; i++)
    {
        for( let j = 0 ; j <numbers.length  ; j++)
        {
            if(numbers[j] > numbers[j+1])
            {
                let temp = numbers[j];
                numbers[j] = numbers [j+1]
                numbers[j+1] = temp;

            }
        }
    }

console.log("Numbers list After sorting: ", numbers)

for(let i=0; i<numbers.length ; i++)
  {
      for(let j = 0 ; j<numbers.length;  j++)
      {
          if(numbers[j] < numbers[j+1])
          {
              let temp = numbers[j];
              numbers[j] = numbers[j+1]
              numbers[j+1] = temp ;
          }
      }
  }
  console.log("numbers list after desc sorting " , numbers)

