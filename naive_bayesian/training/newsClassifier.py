
from naiveBayesClassifier import tokenizer
from naiveBayesClassifier.trainer import Trainer
from naiveBayesClassifier.classifier import Classifier

newsTrainer = Trainer(tokenizer)

# You need to train the system passing each text one by one to the trainer module.
newsSet =[
    {'text': 'Hakan is very healthy now', 'category': 'health'},
    {'text': 'Turkey supports USA troops', 'category': 'politics'},
    {'text': 'drink more water', 'category': 'health'},
    {'text': 'Turkey is the best ally of USA and Trump is the best president Turkey said', 'category': 'politics'},
    {'text': 'eat less', 'category': 'health'},
    {'text': 'eat more veggie', 'category': 'health'}
]
for news in newsSet:
    newsTrainer.train(news['text'], news['category'])

# When you have sufficient trained data, you are almost done and can start to use
# a classifier.
newsClassifier = Classifier(newsTrainer.data, tokenizer)

# Now you have a classifier which can give a try to classifiy text of news whose
# category is unknown, yet.
classification = newsClassifier.classify("Trump is")

# the classification variable holds the detected categories sorted
print(classification)
