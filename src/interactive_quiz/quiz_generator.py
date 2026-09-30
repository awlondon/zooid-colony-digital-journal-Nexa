def generate_quiz_questions(book_id, user_id):
    """
    Generates quiz questions tailored to the user's reading history and preferences.
    """
    user_history = get_user_reading_history(user_id)
    book_summary = get_book_summary(book_id)
    user_preferences = get_user_preferences(user_id)
    
    # Analyze user history and preferences
    relevant_concepts = analyze_relevance(user_history, book_summary, user_preferences)
    
    # Generate quiz questions
    quiz_questions = generate_questions(book_summary, relevant_concepts)
    
    return quiz_questions
