import React, { Component } from "react";

import SearchBar from "./components/searchBar/SearchBar";
import api from "./components/api/api";
import Button from "./components/button/Button";
import ImageGallery from "./components/image/imageGallery/ImageGallery";
import Loader from "react-loader-spinner";
import Modal from "./components/modal/Modal";

class App extends Component {
  state = {
    hits: [],
    largeImageURL: "",
    searchQuery: "",
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }
  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, page: 1, hits: [], error: null });
  };

  fetchArticles = () => {
    const { page, searchQuery } = this.state;
    const options = { page, searchQuery };

    this.setState({ isLoading: true });

    api
      .fetchArticles(options)
      .then((hits) => {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });

        this.setState({
          isLoading: false,
        });
      });
  };

  getImage = (URL) => {
    this.setState({
      largeImageURL: URL,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { hits, isLoading, error, showModal } = this.state;
    return (
      <>
        {error && <h2>Error</h2>}
        <SearchBar onChangeQuery={this.onChangeQuery} />
        {isLoading && <Loader />}

        <ImageGallery hits={hits} getImage={this.getImage} />
        {hits.length > 0 && <Button fetchArticles={this.fetchArticles} />}
        {showModal && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}

export default App;
