import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:learn_to_win/view/Questions.dart';

void main() {
  return runApp(const MainPage());
}
class MainPage extends StatefulWidget{
  const MainPage({super.key});

  @override
  State<MainPage> createState() => HomePage();
}

class HomePage extends State<MainPage>{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      scrollBehavior: MyScrollBehavior(),
      debugShowCheckedModeBanner: false,
      title: "LearnToWin",
      home: Scaffold(
        backgroundColor: Colors.white,
         appBar: AppBar(
          backgroundColor: Colors.green,
           title: const Center(child: Text('LearnToWin', style: TextStyle(),)),
        ),
        body: const Questions(),
      ),
    );
  }
}

class MyScrollBehavior extends MaterialScrollBehavior {
  @override
  Set<PointerDeviceKind> get dragDevices => {
    PointerDeviceKind.touch,
    PointerDeviceKind.mouse,
  };
}