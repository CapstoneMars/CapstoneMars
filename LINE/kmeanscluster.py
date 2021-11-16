#import numpy as np
import pandas as pd
from sklearn.cluster import KMeans


class Cluster:
    def __init__(self):
        self.best_k = 0
        self.lines = []

    def preprocess(self, json_data):
        dataframe = pd.read_json(json_data)
        oc = dataframe.drop(['time', 'high', 'low'], axis=1)
        return oc

    def scaledInertia(self, data, k, alpha_k=0.03):
        init = KMeans(n_clusters=1, random_state=0, init='k-means++').fit(data)
        inertia_o = init.inertia_
        kmeans = KMeans(n_clusters=k, random_state=0,
                        init='k-means++').fit(data)
        scaled_inertia = (kmeans.inertia_ / inertia_o) + (alpha_k * k)
        return scaled_inertia

    def chooseK(self, data):
        inertia_arr = []
        k_range = range(2, 11)

        for k in k_range:
            scaled_inertia = self.scaledInertia(data, k)
            inertia_arr.append(scaled_inertia)

        self.best_k = inertia_arr.index(min(inertia_arr)) + 2

    def KMeansCluster(self, data):
        kmeans = KMeans(n_clusters=self.best_k).fit(data)
        clusters = kmeans.predict(data)
        return clusters

    def assignCluster(self, data, cluster):
        data = data.assign(cluster=cluster)
        return data

    def makeLines(self, data):
        for i in range(self.best_k):
            self.lines.append(
                min(data[data.cluster == i].min().open, data[data.cluster == i].min().close))
            self.lines.append(
                (max(data[data.cluster == i].max().open, data[data.cluster == i].max().close)))

    # 이것만 호출하면 됩니다.
    def returnLines(self, json_data):
        oc = self.preprocess(json_data)
        self.chooseK(oc)
        clusters = self.KMeansCluster(oc)
        oc = self.assignCluster(oc, clusters)
        self.makeLines(oc)
        return self.lines
