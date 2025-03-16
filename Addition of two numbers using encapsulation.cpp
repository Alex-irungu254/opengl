#include <iostream>
using namespace std;

 class add{
  private:
  int a, b, c;// private members
  public:
  void sum(){
    cout<<"Enter your first and Last number"<<endl;
    cin>>a>>b;
    c=a+b;
    cout<<"sum of two numbers: "<<c<<endl;
  }
 };
  int main(){
    add k;
    k.sum();
    return 0;
  }