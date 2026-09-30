def generate_personalized_summary(user_id, book_id):
    """
    Generates a personalized summary for a user based on their reading history and preferences.
    """
    user_history = get_user_reading_history(user_id)
    book_summary = get_book_summary(book_id)
    user_preferences = get_user_preferences(user_id)
    
    # Analyze user history and preferences
    relevant_concepts = analyze_relevance(user_history, book_summary, user_preferences)
    
    # Generate personalized summary
    personalized_summary = personalize_summary(book_summary, relevant_concepts)
    
    return personalized_summary
