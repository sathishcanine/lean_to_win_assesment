import 'dart:math';

import 'package:flutter/material.dart';
import 'package:learn_to_win/data/QuestionsData.dart';

class Questions extends StatefulWidget {
  const Questions({
    Key? key,
  }) : super(key: key);

  @override
  State<Questions> createState() => _CarouselState();
}

class _CarouselState extends State<Questions> {
  late PageController _pageController;
  int activePage = 1;
  int? selectedValue; // Default selected value

  @override
  void initState() {
    super.initState();
    _pageController = PageController(viewportFraction: 0.8, initialPage: 1);
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        SizedBox(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height * 0.7,
          child: PageView.builder(
              itemCount: QuestionsData.questionsList.length,
              pageSnapping: true,
              controller: _pageController,
              onPageChanged: (page) {
                setState(() {
                  activePage = page;
                });
              },
              itemBuilder: (context, pagePosition) {
                bool active = pagePosition == activePage;
                return slider(
                    QuestionsData.questionsList[pagePosition], active);
              }),
        ),
      ],
    );
  }

  Widget slider(item, active) {
    double margin = active ? 10 : 20;
    Map<String, dynamic> data = item;

    return AnimatedContainer(
      duration: const Duration(milliseconds: 500),
      curve: Curves.easeInOutCubic,
      margin: EdgeInsets.all(margin),
      child: Container(
        decoration: const BoxDecoration(
          boxShadow: [
            BoxShadow(blurRadius: 10.0, color: Colors.grey),
          ],
        ),
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            color: Colors.white,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.only(left: 18.0, top: 18.0),
                child: Text(
                  data["questionTitle"],
                  style: const TextStyle(
                      fontSize: 24, fontWeight: FontWeight.bold),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(left: 18.0, top: 18.0),
                child: Text(
                  data["questionSubTitle"],
                  style: const TextStyle(
                      fontSize: 18, fontWeight: FontWeight.bold),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(left: 18.0, top: 18.0),
                child: ListView.builder(
                  scrollDirection: Axis.vertical,
                  shrinkWrap: true,
                  itemCount: data["questionDes"].length,
                  itemBuilder: (context, index) {
                    return RadioListTile(
                      title: Text(data["questionDes"][index]),
                      value: index,
                      groupValue: data["selectedOption"],
                      onChanged: (value) {},
                    );
                  },
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
